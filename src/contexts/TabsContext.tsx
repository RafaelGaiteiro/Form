import { ReactNode, createContext, useContext, useState } from 'react';

export interface ITabsContext {
	selectedTab: string | undefined;
	setSelectedTab: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const TabsContext = createContext<ITabsContext>({} as ITabsContext);

interface ITabsProvider {
	children: ReactNode;
}

export function TabsProvider({ children }: ITabsProvider) {
	const [selectedTab, setSelectedTab] = useState<string>();

	return (
		<TabsContext.Provider
			value={{
				selectedTab,
				setSelectedTab,
			}}
		>
			{children}
		</TabsContext.Provider>
	);
}

export function useTabs(): ITabsContext {
	const context = useContext(TabsContext);

	if (!context) {
		throw new Error('useTabs must be used within a TabsProvider');
	}

	return context;
}
