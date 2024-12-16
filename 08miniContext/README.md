# This is the Defination of useContext..

# The useContext hook in React provides an easy way to share data between components without having to pass props manually at every level. It allows you to access the value of a context in any component,

# 1. Create a Context: First, you create a context using the React.createContext() method. This provides a way to define a "global" value that can be shared across components.

# 2. Provide the Context Value: You use the Provider component that comes with the context to specify the value of the context. The Provider wraps the components that need access to the context.

# 3. Consume the Context Value: Any component can use the useContext hook to access the context's value without passing props.you got this