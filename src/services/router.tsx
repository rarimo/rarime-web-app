import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import MainLayout from '@/components/MainLayout'

export enum RoutePaths {
  Home = '/',
  RewardsInvitationAlias = '/r/:code',
  DownloadApp = '/download-app',
  ProofRequestsDemo = '/proof-requests-demo',
  ExternalRequest = '/external',
}

export function AppRouter() {
  const Home = lazy(() => import('@/pages/Home'))
  const RewardsInvitationAlias = lazy(() => import('@/pages/RewardsInvitationAlias'))
  const DownloadApp = lazy(() => import('@/pages/DownloadApp'))
  const ProofRequestsDemo = lazy(() => import('@/pages/ProofRequestsDemo'))
  const ExternalRequest = lazy(() => import('@/pages/ExternalRequest'))

  const router = createBrowserRouter([
    {
      path: RoutePaths.Home,
      element: (
        <MainLayout>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </MainLayout>
      ),
      children: [
        {
          path: RoutePaths.RewardsInvitationAlias,
          element: <RewardsInvitationAlias />,
        },
        {
          path: RoutePaths.DownloadApp,
          element: <DownloadApp />,
        },
        {
          path: RoutePaths.ProofRequestsDemo,
          element: <ProofRequestsDemo />,
        },
        {
          path: RoutePaths.ExternalRequest,
          element: <ExternalRequest />,
        },
        {
          path: RoutePaths.Home,
          element: <Home />,
        },
        {
          path: '*',
          element: <Navigate replace to={RoutePaths.Home} />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
