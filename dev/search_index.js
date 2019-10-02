var documenterSearchIndex = {"docs":
[{"location":"#NCTiles.jl-Documentation-1","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"","category":"section"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"NCTiles.jl reads and writes tiled Netcdf files that represent e.g. subdivisions of Earth's surface. Inter-operability with popular climate model grids and MeshArrays.jl is an important prospect. NCTiles.jl derives from the nctiles design previously implemented in Matlab as part of gcmfaces (Forget et al. 2015). ","category":"page"},{"location":"#Contents-1","page":"NCTiles.jl Documentation","title":"Contents","text":"","category":"section"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"","category":"page"},{"location":"#Use-examples-1","page":"NCTiles.jl Documentation","title":"Use examples","text":"","category":"section"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"Examples/ demonstrates the package functionalities:","category":"page"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"ex_1.jl reads a binary file containing one interpolated 2D field on a regular grid. It then writes that array to a NetCDF/NCTiles file.\nex_2.jl reads data from a NetCDF file containing one tile of model output. It then writes it to a new NetCDF/NCTiles file. This uses 3D data on a non-regular grid for one ocean subdivision (tile).\nex_3.jl is an example of interpolated model output processing in CBIOMES where several variables are included in the same NetCDF/NCTiles file.\nex_4.jl generates a tiled netcdf output (i.e., a nctiles output) for a global 2D field on the non-regular LLC90 grid (see MeshArrays.jl). Since the tile width is set to 90, this creates 13 files.","category":"page"},{"location":"#Main-Features-1","page":"NCTiles.jl Documentation","title":"Main Features","text":"","category":"section"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"NCTiles.jl first goes through lazy operations, on data stucture, as it obtains information about variables etc. The second phase calls createfile and then the add* functions to instantiate files. Note: some of the included functions are interfaces to MITgcm output.","category":"page"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"Data structures:","category":"page"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"NCData contains a string or an array of strings (NetCDF file names) + metadata to read files. \nNCvar contains information needed to write a NetCDF file which can include a list of filenames (see Bindata) if the data is not loaded into memory.\nBinData is a container for one field.\nTileData contains a MeshArray or BinData struct in vals,   information about the tile layout in tileinfo, and metadata needed for   reading/writing tile data.","category":"page"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"As an example:","category":"page"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"struct TileData{T}\n    vals::T\n    tileinfo::Dict\n    tilesize::Tuple\n    precision::Type\n    numtiles::Int\nend","category":"page"},{"location":"#Index-1","page":"NCTiles.jl Documentation","title":"Index","text":"","category":"section"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"","category":"page"},{"location":"#API-/-Functions-1","page":"NCTiles.jl Documentation","title":"API / Functions","text":"","category":"section"},{"location":"#","page":"NCTiles.jl Documentation","title":"NCTiles.jl Documentation","text":"Modules = [NCTiles]\nOrder   = [:type,:function]\nPrivate = false","category":"page"},{"location":"#NCTiles.BinData","page":"NCTiles.jl Documentation","title":"NCTiles.BinData","text":"BinData\n\nData structure containing a string or an array of strings (NetCDF     file names) as well as metadata needed to read a file.\n\n\n\n\n\n","category":"type"},{"location":"#NCTiles.BinData-Tuple{Union{String, Array{String,N} where N},Type,Tuple}","page":"NCTiles.jl Documentation","title":"NCTiles.BinData","text":"BinData(fnames::Union{Array{String},String},precision::Type,iosize::Tuple)\n\nConstruct a BinData struct for files that contain one field.\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.NCData","page":"NCTiles.jl Documentation","title":"NCTiles.NCData","text":"NCData\n\nData structure containing a string or an array of strings (file names) of     NetCDF files as well as information needed to read a file.\n\n\n\n\n\n","category":"type"},{"location":"#NCTiles.NCvar","page":"NCTiles.jl Documentation","title":"NCTiles.NCvar","text":"NCvar\n\nData structure containing information needed to write a NetCDF file. This includes a list of filenames (see Bindata) if the data is not loaded into memory.\n\n\n\n\n\n","category":"type"},{"location":"#NCTiles.TileData","page":"NCTiles.jl Documentation","title":"NCTiles.TileData","text":"TileData{T}\n\nData structure containing either a MeshArray struct or BinData struct (see vals),     MeshArray structs describing the tile layout (tileinfo), and other information for     reading/writing tile data.\n\n\n\n\n\n","category":"type"},{"location":"#NCTiles.TileData-Tuple{Any,Tuple,MeshArrays.gcmgrid}","page":"NCTiles.jl Documentation","title":"NCTiles.TileData","text":"TileData(vals,tilesize::Tuple)\n\nConstruct a TileData struct. First generate the tileinfo, precision, and numtiles attributes.\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.addData","page":"NCTiles.jl Documentation","title":"NCTiles.addData","text":"addData(v::Union{NCDatasets.CFVariable,NetCDF.NcVar},var::NCvar)\n\nFill variable with data in netcdf file using either NCDatasets.jl or NetCDF.jl\n\n\n\n\n\n","category":"function"},{"location":"#NCTiles.addDim-Tuple{NCDatasets.Dataset,NCvar}","page":"NCTiles.jl Documentation","title":"NCTiles.addDim","text":"addDim(ds::NCDatasets.Dataset,dimvar::NCvar) # NCDatasets\n\nAdd a dimension to a NCDatasets.Dataset\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.addDim-Tuple{NCvar}","page":"NCTiles.jl Documentation","title":"NCTiles.addDim","text":"addDim(dimvar::NCvar)\n\nAdd a dimension to a NetCDF file using NetCDF.jl\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.addDimData-Tuple{Any,NCvar}","page":"NCTiles.jl Documentation","title":"NCTiles.addDimData","text":"addDimData(v::Union{NCDatasets.CFVariable,NetCDF.NcVar,Array},var::NCvar)\n\nAdd dimension data to predefined dimensions in a NetCDF file.\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.addVar-Tuple{NCDatasets.Dataset,NCvar}","page":"NCTiles.jl Documentation","title":"NCTiles.addVar","text":"addVar(ds::NCDatasets.Dataset,field::NCvar)\n\nAdd a variable to a NetCDF file using NCDatasets.jl\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.addVar-Tuple{NCvar,Array{NetCDF.NcDim,N} where N}","page":"NCTiles.jl Documentation","title":"NCTiles.addVar","text":"addVar(field::NCvar,dimlist::Array{NetCDF.NcDim})\n\nAdd a variable with dimensions dimlist to a NetCDF file using NetCDF.jl\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.addVar-Tuple{NCvar}","page":"NCTiles.jl Documentation","title":"NCTiles.addVar","text":"addVar(field::NCvar})\n\nAdd a variable and its dimensions to a NetCDF file using NetCDF.jl\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.createfile-Tuple{Any,Union{NCvar, Dict},Any}","page":"NCTiles.jl Documentation","title":"NCTiles.createfile","text":"createfile(filename, field::Union{NCvar,Dict{String,NCvar}}, README;\n            fillval=NaN, missval=NaN, itile=1, ntile=1)\n\nCreate NetCDF file and add variable + dimension definitions using either NCDatasets.jl or NetCDF.jl\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.parsemeta-Tuple{Any}","page":"NCTiles.jl Documentation","title":"NCTiles.parsemeta","text":"parsemeta(metafile)\n\nParse out an MITgcm metadata file and return a Dict of fields in the file.\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.readAvailDiagnosticsLog-Tuple{Any,Any}","page":"NCTiles.jl Documentation","title":"NCTiles.readAvailDiagnosticsLog","text":"readAvailDiagnosticsLog(fname,fldname)\n\nGet the information for a particular field from the available_diagnostics.log     file (MITgcm output).\n\n\n\n\n\n","category":"method"},{"location":"#NCTiles.readbin","page":"NCTiles.jl Documentation","title":"NCTiles.readbin","text":"readbin(fname::String,prec::Type,iosize::Tuple,fldidx=1)\n\nRead in a binary file as an array as previously done via MeshArrays.read_bin\n\n\n\n\n\n","category":"function"},{"location":"#NCTiles.readbin","page":"NCTiles.jl Documentation","title":"NCTiles.readbin","text":"readbin(flddata::BinData,tidx=1)\n\nRead in a binary file as an array as previously done via MeshArrays.read_bin\n\n\n\n\n\n","category":"function"},{"location":"#NCTiles.readncfile","page":"NCTiles.jl Documentation","title":"NCTiles.readncfile","text":"readncfile(fname,backend::Module=NCDatasets)\n\nRead in a NetCDF file and return variables/dimensions as NCvar structs, and     file attributes as Dict. Large variables/dimensions are not loaded into     memory. This can use either NCDatasets.jl or NetCDF.jl\n\n\n\n\n\n","category":"function"}]
}