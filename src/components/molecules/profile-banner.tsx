import { ConnectButton } from '@rainbow-me/rainbowkit'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import clsx from 'clsx'

import { Avatar, Balance } from '@/components'
import { useUser } from '@/hooks'

export const ProfileBanner = () => {
  const { isLoading } = useUser()

  return (
    <div className={clsx('relative', isLoading && 'blur-md')}>
      <div className="mx-auto max-w-auto">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              width={1400}
              height={440}
              src="/profile.svg"
              alt="Profile banner"
            />
            <div className="absolute inset-0 mix-blend-multiply" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-5 md:p-10">
            <div className="flex items-start justify-center md:justify-start w-full md:h-40">
              <ConnectButton label="Connect your wallet" accountStatus="address" chainStatus="none" />
            </div>
            <div className="flex items-start justify-center md:justify-end w-full md:h-40 z-10">
              <span className="inline-flex cursor-pointer py-2 px-4 bg-white/20 rounded-lg">
                <p className="text-base text-white font-medium">Edit profile:</p>
                <PencilSquareIcon className="text-white h-6 w-6 ml-2" />
              </span>
            </div>
            <div className="flex items-end justify-center md:justify-start w-full md:h-40">
              <Avatar />
            </div>
            <div className="flex items-end justify-center md:justify-end w-full md:h-40">
              <Balance />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
