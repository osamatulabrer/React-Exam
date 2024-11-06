




import {  TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

export default function Input() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
      </div>
      <TextInput id="email4" type="search" icon={CiSearch} placeholder="Quick search..." />
    </div>
  );
}
