// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
let myStatusBarItem: vscode.StatusBarItem;
export function activate() {
	const myCommandId = 'statusbar.showCurrentUser';

	// create a new status bar item that we can now manage
	let myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
	myStatusBarItem.command = myCommandId;

	// update status bar item once at start
	let userName = require("os").userInfo().username;
	myStatusBarItem.text = `User: ${userName}`;
	myStatusBarItem.show();
}
