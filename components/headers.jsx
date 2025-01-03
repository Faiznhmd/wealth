import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';
import { Button } from './ui/button';
import { LayoutDashboard, PenBox } from 'lucide-react';

const Headers = () => {
  return (
    <>
      <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              height={60}
              width={200}
              alt="welth"
              className="w-auto h-12 object-contain"
            />
          </Link>

          <div className="flex space-x-4 items-center">
            <SignedIn>
              <Link
                href={'/dashboard'}
                className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
              >
                <Button variant="outline">
                  <LayoutDashboard size={18} />
                  <span className="hidden md:inline">Dashboard</span>
                </Button>
              </Link>

              <Link
                href={'/transaction/create'}
                className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
              >
                <Button className="flex items-center gap-2">
                  <PenBox size={18} />
                  <span className="hidden md:inline">Add Transaction</span>
                </Button>
              </Link>
            </SignedIn>

            <SignedOut>
              <SignInButton forceRedirectUrl="/dashboard">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10',
                  },
                }}
              />
            </SignedIn>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Headers;
