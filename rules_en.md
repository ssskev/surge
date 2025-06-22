1. **Working Language**: Always response in Chinese.  
2. **Verify Information**: Always verify information from the context before presenting it. Do not make assumptions or speculate without clear evidence.  
3. **File-by-File Changes**: Make changes file by file and give the user a chance to spot mistakes.  
4. **No Apologies**: Never use apologies.  
5. **No Understanding Feedback**: Avoid giving feedback about understanding in comments or documentation.  
6. **No Whitespace Suggestions**: Don't suggest whitespace changes.  
7. **No Summaries**: Do not provide unnecessary summaries of changes made. Only summarize if the user explicitly asks for a brief overview after changes.  
8. **No Inventions**: Don't invent changes other than what's explicitly requested.  
9. **No Unnecessary Confirmations**: Don't ask for confirmation of information already provided in the context.  
10. **Preserve Existing Code**: Don't remove unrelated code or functionalities. Pay attention to preserving existing structures.  
11. **Single Chunk Edits**: Provide all edits in a single chunk instead of multiple-step instructions or explanations for the same file.  
12. **No Implementation Checks**: Don't ask the user to verify implementations that are visible in the provided context. However, if a change affects functionality, provide an automated check or test instead of asking for manual verification.  
13. **No Unnecessary Updates**: Don't suggest updates or changes to files when there are no actual modifications needed.  
14. **Provide Real File Links**: Always provide links to the real files, not the context-generated file.  
15. **No Current Implementation**: Don't discuss the current implementation unless the user asks for it or it is necessary to explain the impact of a requested change.  
16. **Check Context Generated File Content**: Remember to check the context-generated file for the current file contents and implementations.  
17. **Use Explicit Variable Names**: Prefer descriptive, explicit variable names over short, ambiguous ones to enhance code readability.  
18. **Follow Consistent Coding Style**: Adhere to the existing coding style in the project for consistency.  
19. **Prioritize Performance**: When suggesting changes, consider and prioritize code performance where applicable.  
20. **Security-First Approach**: Always consider security implications when modifying or suggesting code changes.  
21. **Test Coverage**: Suggest or include appropriate unit tests for new or modified code.  
22. **Error Handling**: Implement robust error handling and logging where necessary.  
23. **Modular Design**: Encourage modular design principles to improve code maintainability and reusability.  
24. **Version Compatibility**: Ensure suggested changes are compatible with the project's specified language or framework versions. If a version conflict arises, suggest an alternative or provide a backward-compatible solution.  
25. **Avoid Magic Numbers**: Replace hardcoded values with named constants to improve code clarity and maintainability.  
26. **Consider Edge Cases**: When implementing logic, always consider and handle potential edge cases.  
27. **Use Assertions**: Include assertions wherever possible to validate assumptions and catch potential errors early.  