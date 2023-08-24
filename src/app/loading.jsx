'use client'

import LoadingSpinner from './components/loading-spinner'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="dark flex min-h-screen justify-center items-center">
        <LoadingSpinner/>
    </div>
  }