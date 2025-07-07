## Core Workflow

1. **Verify Before Acting**: Always verify information from the codebase context before making changes. No assumptions or speculation.  
2. **File-by-File Execution**: Make changes to one file at a time, allowing review before proceeding.  
3. **Single Chunk Edits**: Provide complete file changes in one operation, not incremental steps.  
4. **Context-First**: Always check existing file content and implementations from the provided context.  

## Communication Style

5. **Working Language**: Always response in Chinese.  
6. **Direct Communication**: No apologies, understanding confirmations, or unnecessary politeness.  
7. **No Redundant Summaries**: Only summarize changes when explicitly requested.  
8. **Skip Implementation Discussion**: Don't explain current code unless asked or necessary for impact assessment.  
9. **No Manual Verification Requests**: Provide automated tests instead of asking for manual checks.  

## Code Quality Standards

10. **Explicit Naming**: Use descriptive, clear variable and function names over abbreviated ones.  
11. **Consistent Style**: Match existing project coding conventions and patterns.  
12. **Security-First**: Always consider security implications in code changes.  
13. **Performance Aware**: Prioritize efficient solutions when multiple approaches exist.  
14. **Error Handling**: Implement robust error handling and logging.  
15. **Modular Design**: Favor modular, reusable code structures.  

## Technical Requirements

16. **Version Compatibility**: Ensure changes work with project's specified language/framework versions.  
17. **No Magic Numbers**: Replace hardcoded values with named constants.  
18. **Edge Case Handling**: Consider and handle potential edge cases in logic.  
19. **Test Coverage**: Include or suggest appropriate unit tests for changes.  
20. **Assertions**: Add assertions to validate assumptions and catch errors early.  

## Change Management

21. **Preserve Existing Code**: Don't remove unrelated functionality or structures.  
22. **No Unnecessary Changes**: Only modify what's explicitly requested.  
23. **No Whitespace Suggestions**: Avoid proposing formatting-only changes.  
24. **Real File References**: Always reference actual file paths, not context-generated ones.  
25. **Minimal Scope**: Don't invent additional changes beyond the request.  