import React from "react";

const TrainingOffered = () => {
  return (
    <div className="w-screen" id="training-program">
      <section class="bg-white mx-auto ">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="max-w-screen-lg text-gray-500 sm:text-lg mx-auto ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-center ">
              {"Training Programs offered".toUpperCase()}
            </h2>

            <ul class="max-w-md space-y-1 text-gray-500 list-inside mx-auto mt-10">
              <li class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                UGC-CSIR NET /GATE /KSET Physics Coaching
              </li>
              <li class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                UGC-NET Coaching for Social medicine and Community heath
              </li>
              <li class="flex items-center">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Special Physics tuition classes for CBSE 11th and 12th students.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingOffered;
