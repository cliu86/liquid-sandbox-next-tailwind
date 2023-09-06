
'use client';
import { useLiquid } from '../../utils/liquid'
import {
  LdCard,
  LdLink
} from '@emdgroup-liquid/liquid/dist/react-define-excluded'
import type { NextPage } from 'next'
import * as React from 'react' // This is a client side React component.
// We use Liquid Oxygen Web Components with React bindings here.
// See https://liquid.merck.design/liquid/guides/server-side-rendering/#react-server-components
const Home: NextPage = () => {
  useLiquid()
  //need to create a 4 column grid with 2 rows
  return (
    <>
      <div className="container">
        <div className='w-2/3 mx-auto mt-8'>
          <div className="grid grid-cols-4 gap-6 mx-10">
            <LdLink href="/tech-radar" >
              <LdCard shadowInteractive="sticky">
                Technology Radar
              </LdCard>
            </LdLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
