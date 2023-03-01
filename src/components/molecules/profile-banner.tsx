import { PencilSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import { Avatar, Balance } from '@/components'
import { useUser } from '@/hooks'
import { blurDataUrl } from '@/helpers/constants'

type ProfileBannerProps = {
  isEditMode: boolean
  setEditMode: (value: boolean) => void
}

export const ProfileBanner = ({ isEditMode, setEditMode }: ProfileBannerProps) => {
  const { isLoading } = useUser()

  return (
    <div className="relative">
      <div className="mx-auto max-w-auto">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-fill md:object-cover"
              width={1400}
              height={440}
              src="/profile.png"
              alt="Profile banner"
              blurDataURL={blurDataUrl}
            />
            <div className="absolute inset-0 mix-blend-multiply" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-5 md:p-10">
            <div className="flex items-start justify-center md:justify-start w-full md:h-40 col order-1">
              {!isLoading && <ConnectButton />}
            </div>
            <div className="flex items-start justify-center md:justify-end w-full md:h-40 z-10 order-2">
              <div
                className="inline-flex cursor-pointer py-2 px-4 bg-purple/60 rounded-lg"
                onClick={() => setEditMode(!isEditMode)}
              >
                <p className="text-base text-white font-medium">Edit profile:</p>
                <PencilSquareIcon className="text-white h-6 w-6 ml-2" />
              </div>
            </div>
            <div className="flex items-end justify-center md:justify-start w-full md:h-40 order-last md:order-3">
              <Avatar />
            </div>
            <div className="flex items-center md:mt-4 justify-center md:justify-end w-full md:h-40 order-4">
              <Balance />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
