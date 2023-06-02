<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CustomersPermissions
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        $permissions = $user->permissions;

        if ($permissions & 1 === 0) {
            return $request->expectsJson() ? response()->json(['message' => 'You do not have permissions to access this resource!']) : redirect(route('dashboard'));
        }

        return $next($request);
    }
}
