type PageInfo = {
	name: string;
	path: string;
};

export const pages: PageInfo[] = [
	{ name: "Home", path: "/" },
	{ name: "Maze Generator", path: "/maze/" },
];

export const currentPage = pages.filter(
	(page) =>
		window.location.pathname === page.path ||
		window.location.pathname === page.path + "index.html"
)[0];
