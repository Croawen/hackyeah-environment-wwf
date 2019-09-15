import React, { Fragment, useEffect, useRef } from 'react'
import { Waypoint } from 'react-waypoint'
import Loader from './Loader'

const LazyLoader = ({
  children,
  hasMore,
  isFetching,
  loadMore,
  topOffset,
  bottomOffset,
}) => {
  const visibleRef = useRef(false)
  const timeoutRef = useRef(0)

  const onEnter = () => {
    visibleRef.current = true
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (visibleRef.current) {
        loadMore()
      }
    }, 300)
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <Fragment>
      {hasMore && !isFetching && (
        <Waypoint
          onEnter={onEnter}
          onLeave={() => {
            visibleRef.current = false
          }}
          topOffset={topOffset}
          bottomOffset={bottomOffset}
        />
      )}
      {isFetching && <Loader className="position-absolute" />}
      {children}
    </Fragment>
  )
}
export default LazyLoader
