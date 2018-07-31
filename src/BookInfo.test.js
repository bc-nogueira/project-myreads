import React from 'react'
import { shallow, mount } from 'enzyme'
import BookInfo from './components/book/BookInfo'

const props = {
    book: { title: 'Test Book', subtitle: 'Subtitle of Test Book' }
}

describe('[Component] BookInfo', () => {
    it('shallow renders correctly', () => {
        expect(shallow(<BookInfo {...props} />))
    })

    describe('When modal is closed', () => {
        const wrapper = mount(
            <BookInfo {...props} />
        )

        beforeEach(() => {
            wrapper.setState({ open: false });
        });

        it('renders with Modal', () => {
            expect(wrapper.find('Modal')).toHaveLength(1)
        })

        it('renders with Modal empty', () => {
            expect(wrapper.find('h3')).toHaveLength(0)
        })
    })

    describe('When modal is opened', () => {
        const wrapper = mount(
            <BookInfo {...props} />
        )

        beforeEach(() => {
            wrapper.setState({ open: true });
        });

        it('renders with Modal', () => {
            expect(wrapper.find('Modal')).toHaveLength(1)
        })

        it('renders with at least title', () => {
            expect(wrapper.find('h3')).toHaveLength(1)
        })

        it('renders subtitle if book has subtitle', () => {
            expect(wrapper.find('h3')).toHaveLength(1)
        })
    })
})
