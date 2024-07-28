function FeatureSection() {
  return (
    <>
      <div className="container flex flex-col mx-auto mt-20 p-6 space-y-10 md:space-x-8 md:flex-row md:space-y-0 md:mt-0">
        {/* 1st container */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 md:justify-start md:items-start">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h1>
          <p className="max-w-sm text-gray-400 mt-10 text-center md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* 2nd container */}

        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          {/* ----------- LIST ITEM 01 ---------- */}

          <div className="flex flex-col space-x-2  md:space-x-6 md:flex-row">
            <div className=" flex space-x-3 items-center rounded-l-full md:block md:bg-white">
              <h3 className="bg-themeOrange rounded-full px-4 py-2 text-white">
                01
              </h3>
              <h3 className="font-bold text-lg md:hidden">
                Track company-wide progress
              </h3>
            </div>

            <div>
              <h3 className="hidden font-bold text-lg md:block">
                Track company-wide progress
              </h3>
              <p className="text-gray-400 mt-4">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          {/* ----------- LIST ITEM 02 ---------- */}

          <div className="flex flex-col space-x-2  md:space-x-6 md:flex-row">
            <div className=" flex space-x-3 items-center rounded-l-full md:block md:bg-white">
              <h3 className="bg-themeOrange rounded-full px-4 py-2 text-white">
                01
              </h3>
              <h3 className="font-bold text-lg md:hidden">
                Track company-wide progress
              </h3>
            </div>

            <div>
              <h3 className="hidden font-bold text-lg md:block">
                Track company-wide progress
              </h3>
              <p className="text-gray-400 mt-4">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          {/* ----------- LIST ITEM 03 ---------- */}

          <div className="flex flex-col space-x-2  md:space-x-6 md:flex-row">
            <div className=" flex space-x-3 items-center rounded-l-full md:block md:bg-white">
              <h3 className="bg-themeOrange rounded-full px-4 py-2 text-white">
                01
              </h3>
              <h3 className="font-bold text-lg md:hidden">
                Track company-wide progress
              </h3>
            </div>

            <div>
              <h3 className="hidden font-bold text-lg md:block">
                Track company-wide progress
              </h3>
              <p className="text-gray-400 mt-4">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
