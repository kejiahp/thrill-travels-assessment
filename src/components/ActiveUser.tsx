import Image from "next/image";

/**
 * Active users on the sidebar
 */
export default function AllActiveUsers() {
  return (
    <div>
      <p className="text-cust-yellow-200 text-sm">ACTIVE USERS</p>

      <div className="flex my-3 mx-3">
        <ActiveUserImage image="/images/Avatar.png" />
        <ActiveUserImage image="/images/Avatar.png" />
        <ActiveUserImage image="/images/Avatar.png" />
        <ActiveUserImage image="/images/Avatar.png" />
        <ActiveUserText text="+70" />
      </div>
    </div>
  );
}

/*
 * AllActiveUsers helper component
 */
function ActiveUserImage({ image }: { image: string }) {
  return (
    <div className="relative overflow-hidden w-[40px] h-[40px] rounded-full border-2 border-cust-teal-100 -ml-4">
      <Image
        src={image}
        alt="active user"
        fill
        sizes="(min-width: 768px) 50vw,50vw"
        className="object-cover object-center"
      />
    </div>
  );
}

/*
 * AllActiveUsers helper component
 */
function ActiveUserText({ text }: { text: string }) {
  return (
    <div className="relative w-[40px] h-[40px] rounded-full border-2 border-cust-teal-100 -ml-4 bg-cust-yellow-200 flex items-center justify-center">
      <p className="text-xs text-white">{text}</p>
    </div>
  );
}
