import ToggleGroup from "./ToggleGroup";
import Checkbox from "./Checkbox";
{
  /*import HistogramSlider from "./HistogramSlider";*/
}

const Sidebar = () => {
  return (
    <div className="absolute top-16 left-0 h-[calc(100vh-4rem)] w-64 p-5">
      <nav className="flex flex-col space-y-4">
        <ToggleGroup />
        <h3 className="text-black font-semibold">Real Estate Type</h3>
        <div className="mr-6">
          <Checkbox label="Houses" />
          <Checkbox label="Townhomes" />
          <Checkbox label="Multi-Family" />
          <Checkbox label="Lands" />
          <Checkbox label="Houses" />
          <Checkbox label="Apartments" />
          <Checkbox label="Commercial" />
          <Checkbox label="Condos" />
        </div>
        <h3 className="text-black font-semibold">Price Range</h3>
        {/*<HistogramSlider /> */}
        <div className="">
          <div className="flex justify-between">
            <div>
              <label className="block text-sm text-gray-600">Minimum</label>
              <input
                type="number"
                className="w-32 p-2 border border-gray-300 mr-3 rounded"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Maximum</label>
              <input
                type="number"
                className="w-32 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
              </div>
                      <h3 className="text-black font-semibold">Lot Range</h3>
        <div className="">
          <div className="flex justify-between">
            <div>
              <label className="block text-sm text-gray-600">Minimum</label>
              <input
                type="number"
                className="w-32 p-2 border border-gray-300 mr-3 rounded"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Maximum</label>
              <input
                type="number"
                className="w-32 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
