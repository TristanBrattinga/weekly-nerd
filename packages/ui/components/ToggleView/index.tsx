import ListViewIcon from '../../icons/ListViewIcon'
import GridViewIcon from '../../icons/GridViewIcon'
import clsx from 'clsx'
import { useStore } from 'web/src/lib/context/store-context'

const ToggleView = () => {
    const { setViewMode, gridView } = useStore()

    return (
        <ul className="flex gap-2 border border-white w-fit py-1.5 px-2 rounded mx-auto my-10">
            <li>
                <button onClick={() => setViewMode(false)} className="size-6 flex justify-center items-center">
                    <ListViewIcon
                        className={clsx('', {
                            '[&>path]:fill-white': !gridView,
                        })}
                    />
                </button>
            </li>
            <li>
                <button onClick={() => setViewMode(true)} className="size-6 flex justify-center items-center">
                    <GridViewIcon
                        className={clsx('', {
                            '[&>path]:fill-white': gridView,
                        })}
                    />
                </button>
            </li>
        </ul>
    )
}

export default ToggleView
