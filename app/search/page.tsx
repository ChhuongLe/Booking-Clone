import { notFound } from "next/navigation";

type Props = {
  searchParams: SearchParams;
}

export type SearchParams = {
  url: URL;
  group_adults: string;
  group_children: string;
  no_rooms: string;
  checkin: string;
  checkout: string;
};


export default function SearchPage({ searchParams }: Props) {
  if(!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if(!results) return <div>No Results...</div>

  return <div>SearchPage</div>
}