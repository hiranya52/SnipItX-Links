// import { useState } from 'react';
// import { Link, Copy, CheckCircle2, Loader2 } from 'lucide-react';
// import { supabase } from '../lib/supabase';

// export default function URLShortener() {
//   const [longUrl, setLongUrl] = useState('');
//   const [shortCode, setShortCode] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [error, setError] = useState('');

//   const generateShortCode = () => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < 6; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
//   };

//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   const handleShorten = async () => {
//     setError('');

//     if (!longUrl.trim()) {
//       setError('Please enter a URL');
//       return;
//     }

//     if (!isValidUrl(longUrl)) {
//       setError('Please enter a valid URL (including http:// or https://)');
//       return;
//     }

//     setLoading(true);

//     try {
//       const code = generateShortCode();

//       const { error: insertError } = await supabase
//         .from('urls')
//         .insert({
//           short_code: code,
//           original_url: longUrl,
//         });

//       if (insertError) throw insertError;

//       setShortCode(code);
//     } catch (err) {
//       setError('Failed to shorten URL. Please try again.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCopy = async () => {
//     const shortUrl = `${window.location.origin}/${shortCode}`;
//     await navigator.clipboard.writeText(shortUrl);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleReset = () => {
//     setLongUrl('');
//     setShortCode('');
//     setError('');
//     setCopied(false);
//   };

//   return (
//     <section id="shorten" className="min-h-screen flex items-center justify-center px-6 py-20">
//       <div className="max-w-3xl w-full">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#FCDFC5] mb-4">
//             Shorten Your URL
//           </h2>
//           <p className="text-[#FCDFC5]/70 text-lg">
//             Paste your long URL below and get a short link instantly
//           </p>
//         </div>

//         <div className="bg-[#1a1618] rounded-2xl p-8 border border-[#E84F5E]/20 shadow-2xl">
//           {!shortCode ? (
//             <div className="space-y-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={longUrl}
//                   onChange={(e) => setLongUrl(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleShorten()}
//                   placeholder="Enter your long URL here..."
//                   className="w-full px-6 py-4 bg-[#121012] border-2 border-[#FCDFC5]/20 rounded-xl text-[#FCDFC5] placeholder-[#FCDFC5]/40 focus:outline-none focus:border-[#E84F5E] focus:shadow-[0_0_20px_rgba(232,79,94,0.3)] transition-all duration-300"
//                 />
//                 <Link className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FCDFC5]/40" />
//               </div>

//               {error && (
//                 <div className="text-[#E84F5E] text-sm animate-shake">
//                   {error}
//                 </div>
//               )}

//               <button
//                 onClick={handleShorten}
//                 disabled={loading}
//                 className="w-full py-4 bg-[#E84F5E] text-[#FCDFC5] rounded-xl font-bold text-lg hover:bg-[#E84F5E]/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,79,94,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="w-5 h-5 animate-spin" />
//                     <span>Shortening...</span>
//                   </>
//                 ) : (
//                   <span>Shorten URL</span>
//                 )}
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-6 animate-slide-up">
//               <div className="flex items-center justify-center mb-4">
//                 <CheckCircle2 className="w-16 h-16 text-[#E84F5E] animate-scale-in" />
//               </div>

//               <div className="text-center">
//                 <h3 className="text-2xl font-bold text-[#FCDFC5] mb-2">
//                   Your Short Link is Ready!
//                 </h3>
//                 <p className="text-[#FCDFC5]/70">
//                   Share it anywhere you want
//                 </p>
//               </div>

//               <div className="bg-[#121012] rounded-xl p-4 border border-[#E84F5E]/30">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#E84F5E] font-mono text-lg flex-1 truncate">
//                     {window.location.origin}/{shortCode}
//                   </span>
//                   <button
//                     onClick={handleCopy}
//                     className="ml-4 px-4 py-2 bg-[#E84F5E] text-[#FCDFC5] rounded-lg hover:bg-[#E84F5E]/90 transition-all duration-300 flex items-center space-x-2"
//                   >
//                     {copied ? (
//                       <>
//                         <CheckCircle2 className="w-4 h-4" />
//                         <span>Copied!</span>
//                       </>
//                     ) : (
//                       <>
//                         <Copy className="w-4 h-4" />
//                         <span>Copy</span>
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={handleReset}
//                 className="w-full py-3 border-2 border-[#FCDFC5]/20 text-[#FCDFC5] rounded-xl font-medium hover:border-[#E84F5E] hover:text-[#E84F5E] transition-all duration-300"
//               >
//                 Shorten Another URL
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
