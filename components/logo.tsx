import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-10 w-10">
        <Image src="/images/wpingo.png" alt="WPLab Logo" width={40} height={40} className="object-contain" />
      </div>
      <span className="font-bold text-xl text-foreground">WPLab</span>
    </Link>
  )
}
