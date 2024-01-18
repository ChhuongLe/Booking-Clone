import { SearchParams } from "@/app/search/page";

export async function fetchResults(searchParams: SearchParams) {
  const username=process.env.OXYLABS_USERNAME;
  const password=process.env.OXYLABS_PASSWORD;

  const url = new URL(searchParams.url);
  // parse through the url
  Object.keys(searchParams).forEach((key)=>{
    // store each string that is associated with a key in SearchParams
    if(key === "url" || key === "location") return;

    const value = searchParams[key as keyof SearchParams];
    if(typeof value === "string") {
      // create the url
      url.searchParams.append(key, value);
    }
  });

  const bodt = {
    sorce: "universal",
    url: url.href,
    parse: true,
    render: "html",
    parsing_instructions: {
      listings: {
        _fns: [
          {
            _fn: "xpath",
            _args: ["//div[@data-testid'property-card-container'"],
          },
        ],
        _items: {
          title: {
            _fns: [
              {
                _fn: "xpath_one",
                _args: [".//div[@data-testid='title']/text()"]
              }
            ],
          },
        },
      },
      total_listings: {
        _fns: [
          {
            _fn: "xpath_one",
            _args: [".//h1/text()"]
          },
        ]
      }
    }
  }
}