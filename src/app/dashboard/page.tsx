"use client";
import React, { useState } from "react";
import SearchDashboard from "./_components/search-dashboard";
import TemplateList from "./_components/temple-list";

const Dashboard = () => {
	const [searchInput, setSearchInput] = useState<string>();
	// console.log(searchInput);
	return (
		<div>
			<SearchDashboard onSearchInput={setSearchInput} />
			<TemplateList searchInput={searchInput as string} />
		</div>
	);
};

export default Dashboard;
