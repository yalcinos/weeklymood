@component('mail::message')
Hi!<br>

@component('mail::button', ['url' => $url, 'color' => 'blue'])
    Change your password!
@endcomponent

Thanks,<br>
Weekly Mood Team
@endcomponent