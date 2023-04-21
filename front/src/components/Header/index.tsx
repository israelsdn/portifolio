interface HeaderProps{
    onOpenLoginModal: () => void
}

export function Header({ onOpenLoginModal }: HeaderProps){
    
    return (
    <nav className="text-white bg-purple-700 h-10 flex items-center">
        <button
        onClick={onOpenLoginModal} 
        className="absolute max-sm:right-4 right-8 max-lg:right-6 max-sm:text-[10px] max-lg:text-xs text-sm font-semibold">
            LOGIN
        </button>
        <button 
        className="absolute max-sm:right-16 max-lg:right-20 right-24 max-sm:text-[10px] max-lg:text-xs text-sm font-semibold">
            REGISTER
        </button>
    </nav>
    )
}