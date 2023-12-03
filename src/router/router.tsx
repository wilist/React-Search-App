import {createBrowserRouter} from "react-router-dom";
import {AlbumDetails, ArtistDetails, Home, TrackDetails} from "../pages";

export const ROUTER_PATHS = {
  HOME: '/',
  ALBUM_DETAILS: '/album-details',
  ARTIST_DETAILS: '/artist-details',
  TRACK_DETAILS: '/track-details',
}

export const router = createBrowserRouter([
      {
        path: ROUTER_PATHS.HOME,
        element: <Home />,
      },
      {
        path: `${ROUTER_PATHS.ALBUM_DETAILS}/:id`,
        element: <AlbumDetails />,
      },
      {
        path: `${ROUTER_PATHS.ARTIST_DETAILS}/:id`,
        element: <ArtistDetails />,
      },
      {
        path: `${ROUTER_PATHS.TRACK_DETAILS}/:id`,
        element: <TrackDetails />,
      },
]);