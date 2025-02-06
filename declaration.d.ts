declare global {
  interface Window {
    HotelWidget?: {
      init: (config: {
        hotelId: string;
        version: string;
        baseUrl: string;
        hooks: {
          onError: (error: any) => void;
          onInit: () => void;
          onBooking: (booking: Booking) => void;
        };
      }) => void;
      add: (config: { type: string; inline?: boolean; appearance?: any }) => void;
    };
  }
}
export {};
