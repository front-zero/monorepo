import { Button, Input } from "@ht/components";

const SearchForm = () => {
    return (
        <div className="search-box rounded-full p-0.5 bg-gray-200 border border-geyser items-center hidden lg:flex">
            <Input
                id="search"
                name="search"
                placeholder="Search"
                customStyle="nofocus"
                className="w-[15.625rem] border-0 bg-transparent pl-5 rounded-full bg-gray-200"
            />
            <Button
                className="bg-primary-400 hover:bg-primary-400 focus:bg-primary-400 border-0"
                shape="ellipse"
                size="lg"
                iconButton
            >
                <i className="fa fa-search"></i>
            </Button>
        </div>
    );
};

export default SearchForm;
