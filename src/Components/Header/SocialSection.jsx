import { Mail, PhoneCall } from "lucide-react";

function SocialSection() {
  return (
    <div className="flex bg-[#f8f8fb] items-center justify-between py-3 px-[10px] sm:px-[10px] md:px-[30px] 2xl:px-[100px] flex-col md:flex-row">
      <div className="contact-area text-[13px] flex items-center gap-5">
        <a
          href="tel:+639876540321"
          className="flex items-center gap-1 text-[#777] hover:text-[#2d3748]"
        >
          <PhoneCall size={18} /> +63 987 6540 321
        </a>
        <a
          href="mailto:dummy21@gmail.com"
          className="flex items-center gap-1 text-[#777] hover:text-[#2d3748]"
        >
          <Mail size={18} /> dummy21@gmail.com
        </a>
      </div>
      <div className="message-area px-7">
        <em className="text-[#777] text-xs">
          World's Fastest Online Shopping Destination
        </em>
      </div>
    </div>
  );
}

export default SocialSection;
