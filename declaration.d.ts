declare global {
  interface Window {
    HotelWidget?: {
      init: (config: {
        hotelId: string;
        version: string;
        baseUrl: string;
        theme: object;
        hooks: {
          onError: (error: any) => void;
          onInit: () => void;
          onBooking: (booking: Booking) => void;
        };
      }) => void;

      add: (config: {
        type: string;
        inline?: boolean;
        appearance: {
          container: string;
        };
        theme?: object;
      }) => void;
    };
  }
}
export {};
