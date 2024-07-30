"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

function Example() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center gap-2">
            Do you offer technical support?
            <ChevronDownIcon className={clsx('w-5', open && 'rotate-45')} />
          </DisclosureButton>
          <DisclosurePanel>No</DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default Example;
