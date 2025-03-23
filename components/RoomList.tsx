const RoomList: React.FC = () => {
  return (
    <section id="rooms" className="py-12 bg-gray-100 md:padding-container px-10">
      <div className="max-w-[942px] mx-auto">
        <div className="relative flex justify-center pb-10">
          <h2 className="bold-40 lg:bold-64">Наши номера</h2>
        </div>
        <div id="WidgetRoomsListId" />
      </div>
    </section>
  );
};

export default RoomList;
