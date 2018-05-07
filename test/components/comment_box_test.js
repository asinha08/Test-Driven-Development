import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe("Comment Box", () => {
	let component = null;
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});

	it("has a correct class", () => {
		expect(component).to.have.class("comment-box");
	});

	it('checking comment text', () => {
		expect(component).to.contain("hi");
	});

	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	it("has button with text 'Submit'", () => {
		expect(component.find('button')).to.have.text("Submit");
	});
	describe("entering some text in comment box", ()=> {
		beforeEach(()=>{
			component.find("textarea").simulate("change", "i have some text");
		});

		it("show that text in the text area", ()=>{
			expect(component.find("textarea")).to.have.value("i have some text");
		});

		it("when submitted, clears the input", ()=>{
			component.find("form").simulate("submit");
			expect(component.find("textarea")).to.have.value("");
		});
	});
});